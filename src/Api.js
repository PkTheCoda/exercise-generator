import React from "react"

async function getExerciseData(muscle) {
  let data = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
    mode: 'cors',
    headers: {
      'X-Api-Key' : 'vSGrwJSUO8EvcZGf83/nYw==LtW4CWrBc0VOsk1' // put a 3 at the end
    },
  })

  let parsedData = await data.json()
  console.log(parsedData)
  return parsedData
}

