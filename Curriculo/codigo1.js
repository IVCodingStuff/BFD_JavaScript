async function carregarDados() {
    try{
        const [posts, comments, users] = await Promise.all([
            fetch('/api/posts').then(res => res.json()),
            fetchComments(),
            fetchUsers(),
        ]);  

        localStorage.setItem('posts', JSON.stringify(posts))
        localStorage.setItem('comments', JSON.stringify(comments))
        localStorage.setItem('users', JSON.stringify(users))
        console.log(posts, comments, users);
    }
    catch(err){
        console.log('Erro ao carregar dados:', erro);
    }
}