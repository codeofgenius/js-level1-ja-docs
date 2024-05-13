document.addEventListener("DOMContentLoaded", () => {
  const code = document.getElementsByTagName("code");

  Array.from(code).forEach((el) => {
    if (el.className) {
      const s = el.className.split(":");
      const highlightLang = s[0];
      const filename = s[1];
      if (filename) {
        el.classList.remove(el.className);
        el.classList.add(highlightLang);

        const codeHeaderDiv = document.createElement("div");
        codeHeaderDiv.classList.add("code-header");

        const lang = highlightLang.split("-")[1].toUpperCase();
        const codeLangDiv = document.createElement("div");
        codeLangDiv.textContent = lang;
        codeLangDiv.classList.add("code-header-lang");

        const codeControlDiv = document.createElement("div");
        codeControlDiv.classList.add("code-header-control");

        const codeFileDiv = document.createElement("div");
        codeFileDiv.textContent = filename;
        codeFileDiv.classList.add("code-header-file");

        const codeCopyBtn = document.createElement("i");
        codeCopyBtn.setAttribute("class", "fa-solid fa-copy copy-button");

        codeControlDiv.append(codeFileDiv, codeCopyBtn);
        codeHeaderDiv.append(codeLangDiv, codeControlDiv);
        el.before(codeHeaderDiv);
      }
    }
  });
});

/*
 * querySelector等で取得した要素（element)を渡すと、
 * その要素の文字列をクリップボードにコピーします。
 * ユーザーが事前に選択していた内容には影響を与えません。
 * 戻り値はコピーが成功したかどうか（true/false)
 */
let copyToClipboard = (element) => {
  let ranges = [];
  let selection = window.getSelection();
  let range = document.createRange();
  let result = false;
  for (let i = 0; i < selection.rangeCount; i += 1) {
    ranges[i] = selection.getRangeAt(i);
  }
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
  result = document.execCommand("copy");
  selection.removeAllRanges();
  for (let i = 0; i < ranges.length; i += 1) {
    selection.addRange(ranges[i]);
  }
  return result;
};

document.addEventListener("DOMContentLoaded", () => {
  let els = document.querySelectorAll(".copy-button");
  els.forEach((el) => {
    el.addEventListener("click", (e) => {
      try {
        const preEle = el.closest("pre");
        const codeEle = preEle.querySelector("code");
        let result = false;
        if (codeEle) {
          el.classList.add("success");
          copyToClipboard(codeEle);
          setTimeout(() => {
            el.className = "fa-solid fa-copy copy-button";
          }, 500);
        }
      } catch (e) {
        console.log(e);
        //error
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heads = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  if (heads && heads.length) {
    let contents = "";
    heads.forEach((head, i) => {
      let className = "";
      switch (head.localName) {
        case "h1":
          className = `contents1`;
          break;
        case "h2":
          className = `contents2`;
          break;
        case "h3":
          className = `contents3`;
          break;
        case "h4":
          className = `contents4`;
          break;
        case "h5":
          className = `contents5`;
          break;
        case "h6":
          className = `contents6`;
          break;
      }
      contents += `<li class="content-list"><a class="${className} list-circle" href="#head${i}">${head.textContent}</a></li>`;
      head.innerHTML += `<a id="head${i}" class="content-anchor"></a>`;
    });
    document.querySelector("#pageNav").innerHTML +=
      `<ol class="content-ol">${contents}</ol>`;

    document.getElementById("modal-body").innerHTML +=
      `<ol class="content-ol">${contents}</ol>`;
  }

  const modalLinks = document.querySelectorAll("#modal-body ol li a");
  if (modalLinks && modalLinks.length) {
    modalLinks.forEach((link, i) => {
      link.addEventListener("click", () => {
        bootstrap.Modal.getOrCreateInstance(
          document.getElementById("menuModal"),
        ).hide();
        return true;
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".main-content img");
  if (images && images.length) {
    images.forEach((image, i) => {
      image.classList.add("img-fluid");
    });
  }
  const tables = document.querySelectorAll(".main-content table");
  if (tables && tables.length) {
    tables.forEach((table, i) => {
      table.classList.add("table table-bordered table-hover");
    });
  }
  const theads = document.querySelectorAll(".main-content table thead");
  if (theads && theads.length) {
    theads.forEach((thead, i) => {
      thead.classList.add("table-info");
    });
  }
});
