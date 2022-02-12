exports.getHome = async (req, res)=>{
    const {user} = req.params;
    res.send(`Welcome home ${user}`);
}