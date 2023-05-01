//php for github pages, coded in javascript, for javascript.
var init = 0;
function phpinit(){
    //confirm you want to use php module in this script.
    init = 1;
}
function GET_(varname){
    try{
        let params = new URLSearchParams(location.search);
        return params.getAll('name')
    }catch(e){
        console.log("GET_: No variables found matching query, returning null")
        return null
    }
}
function POST_(){
    console.log("POST_ not avaiable yet.")
}
function isset(variable){
    var declared = 1;
    try{ variable; }
    catch(e) {
        if (e.name == "ReferenceError"){
            return 0
        } else {
            return 1
        }
    }
}
function fopen(url, owner, repo, path, token, content, message, sha){
    console.log("this is designed, and ONLY works for GITHUB PAGES, or any GITHUB repo")
    //add functionality for pastebin later
    if (url.includes("github")){
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

const content = btoa(content);
const message = message;
const sha = sha;

fetch(url, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message,
    content,
    sha
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


    }
}
