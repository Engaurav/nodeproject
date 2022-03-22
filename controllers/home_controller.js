



// using async await function for home 
module.exports.home = async function(req, res){
    try{
        return res.send('Music World!')
        // return res.render('home', {
        //     title: "Music | Home"
        // });

    }catch(err){
        console.log('Error',err);
    }
}

