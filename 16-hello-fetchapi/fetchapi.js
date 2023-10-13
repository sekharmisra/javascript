fetch("https://api.github.com").then(r => r.json()).then(j => console.log(j));
fetch("https://api.github.com/emojis").then(r => r.json()).then(j => console.log(j));
fetch("https://api.github.com").then(r => r.json()).then(j => fetch(j.emojis_url)).then(k => k.json()).then(console.log);
fetch("https://api.github.com/users/sekharmisra").then(a => a.json()).then(console.log);
fetch("https://api.github.com/users/sekharmisra/followers").then(a=> a.json()).then(console.log); //No followers today 13th Oct 2023