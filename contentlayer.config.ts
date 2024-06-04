import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer2/source-files').ComputedFields} */
// via computedFields, each field allows us access to a resolve function.
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: string } }) =>
      `/${doc._raw.flattenedPath}`, // inside doc, we extract a certain value that is going to be returned for this slug as a computed field.
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: string } }) =>
      `/${doc._raw.flattenedPath.split('/').slice(1).join('/')}`, // inside doc, we extract a certain value that is going to be returned for this slug as a computed field.
  },
}

// 'Doc' is imported later in our blog.
export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'blog/**/*.mdx', // where your markdown files reside.
  contentType: 'mdx',

  // a benefit of contentlayer is it offers typesafe fields.
  // the fields below correspond to the frontmatter of markdown files.
  fields: {
    title: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'string',
    },

    date: {
      type: 'date',
      required: true,
    },

    image: {
      type: 'image',
      required: false,
    },
  },

  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,

      [
        rehypePrettyCode,

        {
          theme: 'github-dark',
          onVisitLine(node: { children: string | any[] }) {
            // Prevent lines from collapsing in 'display: grid' mode, and allow empty lines to be copy/pasted.
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: '' }]
            }
          },

          onVisitHighlitedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push('line--highlighted')
          },

          onVisitHighlitedWord(node: { properties: { className: string[] } }) {
            node.properties.className.push('word--highlighted')
          },
        },
      ],

      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
