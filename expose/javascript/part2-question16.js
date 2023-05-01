for (let property in myObject) {
    if (property.startsWith('r') || property % 2 != 0) {
      console.log(myObject[property]);
    }
}