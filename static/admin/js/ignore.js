document.querySelectorAll('.btn_delete_ignore').forEach(btn => {
    btn.addEventListener('click', async (e) => {
        let responce = await fetch('/home/delete_ignore/', {
            method: "POST",
            body: JSON.stringify({
                id: Number(btn.dataset.id)
            })
        });

        console.log(await responce.text());

        btn.parentElement.parentElement.remove()
    })
})