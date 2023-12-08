// 'use strict';

document.addEventListener("DOMContentLoaded", () => {

  const jsonUrl = "https://hishida0821.github.io/fetch-api-demo/assets/json/list.json";
  const dataList = document.getElementById("dataList")

  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        
        let title = item.title;
        let description = item.description;

        let list = 
          `<div class="list_item">` +
          `<p class="list_title">` + title + `</p>` +
          `<p class="list_text">` + description + `</p>`;

        dataList.insertAdjacentHTML("beforeend", list);

      });
    })
    .catch(error => {
      console.error("jsonデータの取得に失敗しました。", error);
    });
});
