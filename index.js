const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(cat) {
    return cats.push("Ralph")
}

function destructivelyPrependCat(cat) {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat() {
    const newCatsArray = [...cats, "Broom"]
    return newCatsArray
}

const prependCat = () => {
    const newCatsArray = ["Arnold", ...cats]
    return newCatsArray
}

const removeLastCat = () => {
    const newCatsArray = cats.slice(0, cats.length - 1)
    return newCatsArray
}

const removeFirstCat = () => {
    const newCatsArray = cats.slice(1)
    return newCatsArray
}