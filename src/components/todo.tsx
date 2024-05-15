type TodoPorps = {
  content: string;
}

export default function Todo({ content }: TodoPorps) {
  return (
    <li className="">{content}</li>
  );
}
