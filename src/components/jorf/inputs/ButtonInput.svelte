<script>
  import Literal from "@components/jorf/Literal.svelte";
  import Input from "./Input.svelte";

  export let position = 1;
  export let value;

  export const opMenu = [
    { label: "is pressed" },
    { label: "is released" },
    { label: "is depressed" },
    { label: "is down", labelDev: "0", value: 0 },
    { label: "is up", labelDev: "1", value: 1 },
    { label: "is double tapped" },
  ];

  export function summary() {
    return "button " + position;
  }
  function sample() {
    //TODO: make clear that sampling will just get the lefthand sensor's current value. disable if it's not a dynamic value.
    let v = Math.floor(Math.random() * 100) * 10;
    value = { value: v, label: v };
  }
</script>

<Input {sample}>
  <Literal bind:value autocomplete vocabulary={opMenu} />
</Input>
