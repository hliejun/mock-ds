// type definitions for markdown docs (MDX)

declare module '*.mdx' {
  interface IMDXProps {
    children: React.ReactNode;
    components: { wrapper: React.ReactNode };
  }

  const MDXComponent: (props: MDXProps) => JSX.Element;

  export default MDXComponent;
}
