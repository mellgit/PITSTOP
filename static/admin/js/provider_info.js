document.getElementById("open_settings").addEventListener("click",() => {
    document.querySelector('.back').style.display = "block"
})

document.getElementById("close_settings").addEventListener("click", async () => {
    document.querySelector('.back').style.display = "none"

// # email
// # note
// # email_contact
// # address
// # mail_for_reception
// # name_file
// # number_brand
// # number_availability
// # number_price
// # number_description
// # number_vendor_code
// # phone

    let responce = await fetch("/home/save_form/", {
        method: 'POST',
        body: JSON.stringify({
            id: id_provider,
            email: document.getElementById("output-laer3").value,
            note: document.getElementById("output-laer1").value,
            address: document.getElementById("output-laer").value,
            mail_for_reception: document.getElementById("input-laer1").value,
            name_file: document.getElementById("input-laer2").value,
            number_brand: document.getElementById("input-laer3").value,
            number_price: document.getElementById("input-laer4").value,
            number_description: document.getElementById("input-laer7").value,
            number_vendor_code: document.getElementById("input-laer5").value,
            phone:  document.getElementById("output-laer4").value,
            number_availability: document.getElementById("input-laer6").value,
            email_contacts: document.getElementById("output-laer2").value,
        })
    })

    document.getElementById("info-element__email").textContent = document.getElementById("output-laer3").value;
    document.getElementById("info-element__email-contacts").textContent = document.getElementById("output-laer2").value;
    document.getElementById("info_element_phone_contacts").textContent = document.getElementById("output-laer4").value;
    document.getElementById("info_element_adres_contacts").textContent = document.getElementById("output-laer").value;

    console.log(await responce.text());
})

document.getElementById("open_note").addEventListener("click",() => {
    document.querySelector('.note_back').style.display = "flex"
})

document.getElementById("close_note").addEventListener("click",() => {
   document.querySelector('.note_back').style.display = "none"
})

document.getElementById("save_delete").addEventListener("click",async () => {
    let responce = await fetch("/home/add_ignore/", {
        method: 'POST',

        body: JSON.stringify({
            id_provider,
            brand: document.getElementById('save_delete_brand').value,
            vendor_code: document.getElementById('save_delete_vendor_code').value
        })
    })

    let id = JSON.stringify(await responce.json());

    let div = document.createElement('div');

    document.getElementById('list_ignores').appendChild(div);

    div.outerHTML = `<div class="write-colums" style="margin-left: 90px;">
    <div style="background: #c4c4c4; margin: 5px;" >
        ${document.getElementById('save_delete_brand').value}
    </div>
    <div style="background: #c4c4c4; margin: 5px;">
        ${document.getElementById('save_delete_vendor_code').value}
    </div>
    <div>
        <button data-id = "${id}" class="btn_delete_ignore btn_copy_setting" style="margin: 2px;"><img width="20" height="20" src="/static/admin/images/garbage.svg"></img> </button>
    </div> 
</div>`;
 })