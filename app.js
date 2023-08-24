const $searchInput = $("#search");
const $imageSection = $("#imageSection");

function addGif(res){
    let numResults = res.data.length;
    if(numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-4"})
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "img-thumbnail"
        });
        $newCol.append($newGif)
        $imageSection.append($newCol);
    }
}

$('form').on('submit', async function(e){
    e.preventDefault();

    let searchTerm = $searchInput.val();
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
          }
    });

    $searchInput.val("");
    addGif(res.data);
});
$('#removeGifs').on('click', function(){
    $imageSection.empty();
})


