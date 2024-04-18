const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" },
];

function useAnimal(animals) {
  return [
    animals.name,
    function () {
      console.log(animals.sound);
    },
  ];
}

export default animals;
export { useAnimal };
