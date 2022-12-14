const btnElement = document.querySelector(".create");
const articleId = btnElement.getAttribute("data-linkId");

btnElement.addEventListener("click", (eo) => {
    fetch(`/all-articles/${articleId}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => window.location.href = data.mylink)
        .catch((err) => console.log(err));
});