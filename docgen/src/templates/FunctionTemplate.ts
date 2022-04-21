import { FunctionFragment, FunctionFragmentOptions } from '../fragments'
import { Signature } from '../types'

/**
 * Creates a page template for a function.
 *
 * @param signature - Function signature
 * @param originalDocument - Auto-generated JSON file
 * @param functionFragmentOptions - Options for the function fragment
 * @returns Function page template
 */
export const FunctionTemplate = (
  { name, signatures }: Signature,
  originalDocument?: Array<Signature>,
  functionFragmentOptions?: FunctionFragmentOptions
) =>
  `
---
title: ${name}()
${
  signatures && signatures.length > 0
    ? `description: ${
        signatures[0].comment?.shortText?.replace(/\n/gi, ' ') || 'No description provided.'
      }`
    : 'description: No description provided.'
}
---

${signatures.length > 1 ? `# \`${name}()\`` : ``}

${signatures
  .map((signature) =>
    FunctionFragment(signature, originalDocument, {
      numberOfTotalFunctions: signatures.length,
      ...functionFragmentOptions
    })
  )
  .join('\n\n')}
`

export default FunctionTemplate
