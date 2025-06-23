const express=require('express'); 
const app=express(); 

// listen for req
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// home page

app.get('/',(req,res) => {

    // res.send('<h1>Home Page</h1>');
    res.sendFile('./vues/index.html', { root: __dirname });
}
)

// about page

app.get('/about',(req,res) => {
    res.sendFile('./vues/about.html', { root: __dirname });  
}
)

// redirect

app.get('/about-us',(req,res) => {
    res.redirect('/about');
});

// 404 page

app.use((req, res) => {
    res.status(404).sendFile('./vues/404.html', { root: __dirname });
});

