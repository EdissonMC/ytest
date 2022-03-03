var numberNodes = 0;
var analisis = [];
var currentNode = "";

let resultMap = new Map();
let miMap = new Map();

function extractValuesForKey(object, searchKey, _currentNode = "") {
  numberNodes++;

  if (Object.keys(object).length === 1) {
    if (Object.keys(object)[0] == searchKey) {
      miMap.set(_currentNode, object[searchKey]);
    }

    return;
  }

  var arr = [];

  for (k in object) {
    if (k == searchKey) {
      analisis.push(_currentNode);

      miMap.set(_currentNode, object[k]);
      console.log([...miMap.entries()]);
    }

    if (typeof object[k] === "object") {
      arr.push(
        extractValuesForKey(object[k], searchKey, _currentNode + "/" + k)
      );
    }
  }

  return resultMap;
}

// const result = extractValuesForKey(
//   {
//     uuid: 1,
//     innerOne: {
//       someKey: "some text",
//     },
//     innerTwo: {
//       uuid: 2,
//       innerThree: {
//         someOtherKey: "some other text",
//         innerFour: {
//           uuid: 3,
//         },
//       },
//     },
//   },
//   "uuid"
// );

// console.log("MAPA FINAL 1.. ");
// console.log(" ");

// console.log([...miMap.entries()]);

const result2 = extractValuesForKey(
  {
   
      uuid: 1,
      innerOne: {
        someKey: "some text",
      },
      innerTwo: {
        uuid: 2,
        innerThree: {
          someOtherKey: "some other text",
          innerFour: {
            uuid: 3,
          },
        },
      },
    
  },
  "uuid"
);

console.log("MAPA FINAL 1.. ");
console.log(" ");

console.log([...miMap.entries()]);
