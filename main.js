function dark_mode_button()
{

    const elem1 = document.getElementById("circle")
    const elem2 = document.getElementById("body")
    const elem3 = document.getElementById("dark_mode_button")
    const elem4 = document.getElementById("normal_mode_button")
    const elem5 = document.getElementById("nombre")
    const elem6 = document.getElementById("reset_button")

    elem1.style.backgroundColor = ("white")
    elem2.style.backgroundColor = ("black")
    elem3.style.backgroundColor = ("black")
    elem3.style.color = ("white")
    elem4.style.backgroundColor = ("black")
    elem4.style.color = ("white")
    elem5.style.color = ("white")
    elem6.style.color = ("white")
    elem6.style.backgroundColor = ("black")
    

}

function normal_mode_button()
{

    const elem1 = document.getElementById("circle")
    const elem2 = document.getElementById("body")
    const elem3 = document.getElementById("dark_mode_button")
    const elem4 = document.getElementById("normal_mode_button")
    const elem5 = document.getElementById("nombre")
    const elem6 = document.getElementById("reset_button")

    elem1.style.backgroundColor = ("red")
    elem2.style.backgroundColor = ("orange")
    elem3.style.backgroundColor = ("white")
    elem3.style.color = ("black")
    elem4.style.color = ("black")
    elem4.style.backgroundColor = ("white")
    elem5.style.color = ("black")
    elem6.style.color = ("black")
    elem6.style.backgroundColor = ("white")
}

function add_nbr()
{
    let nbr = document.getElementById("nombre").innerHTML
    nbr = parseInt(nbr) +1
    document.getElementById("nombre").innerHTML = (nbr)
    document.title = ("Counter : " + nbr)
}

function reset_button()
{
    nbr = 0                                                          
    document.getElementById("nombre").innerHTML = (0)
    document.title = ("Counter : " + nbr)
}