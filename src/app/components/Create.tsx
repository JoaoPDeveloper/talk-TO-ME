import { useRef } from "react";
import Button from "./Button";
import { Input } from "./Input";

export default function CreateRoom() {
  const id = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input placeholder="ID da reunião" type="text" ref={id} />
      <Button title="Entrar" type="button" />
    </>
  );
}
