import type {MarkedExtension, marked} from 'https://esm.sh/v135/marked@9.1.6/lib/marked.d.ts';

/** Options for configuring marked-gfm-heading-id extension */
interface GfmHeadingIdOptions {
  /** A string to prepend to all ids. Empty by default. */
  prefix?: string;
}

/**
 * Add `id` attribute to headings (h1, h2, h3, etc) like GitHub.
 *
 * @param options Options for the extension
 * @returns A {@link marked.MarkedExtension | MarkedExtension} to be passed
 *     to {@link marked.use | `marked.use()`}
 */
export function gfmHeadingId(options?: GfmHeadingIdOptions): MarkedExtension;

/**
 * Headings information, can be used to create table of content
 */
export interface HeadingData {
  level: number;
  text: string;
  id: string;
}

/**
 * Returns a list of headings with the ids as computed by gfmHeadingId
 *
 * @param tokens a lexer output
 * @param options Options for the extension
 * @returns A string formatted the same as what would {@link gfmHeadingId} do.
 */
export function getHeadingList(): HeadingData[];
