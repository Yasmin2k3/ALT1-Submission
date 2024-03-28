
  
            " - Delete Failed: " +
            " - Doc ID: " +
            collName +
            entryId +
            error
          " - Delete Failed: " +
          " - Delete Failed: " +
          " - Doc ID: " +
          " - Doc ID: " +
          "Collection: " +
          "Collection: " + collName + " - Delete Succeeded: Doc ID: " + entryId
          Create New
          collName +
          collName +
          entryId +
          entryId +
          error
          error
        "</td>";
        "</td>";
        "<td>" +
        "<td>" +
        "Collection: " +
        "Collection: " +
        "Collection: " + collName + " - Add Succeeded: Doc ID: " + res.id
        "Collection: " + collName + " - update Succeeded: Doc ID: " + res.id
        "edit_" + docFieldsArray[i]
        '" >' +
        '" size="30" type="text" >' +
        '" size="30" type="text" value="' +
        '<input id="edit_' +
        '<input id="edit_' +
        );
        );
        </button>
        console.log(
        console.log(
        docData[docFieldsArray[j]] +
        docFieldsArray[j] +
        docFieldsArray[j] +
        showList();
      "edit_" + docFieldsArray[i]
      ).value;
      );
      );
      );
      );
      .catch(error => {
      .then(v => {
      //console.log("Collection: " + collName + " - Delete Succeeded: Doc ID: " + entryId);
      //console.log("Collection: " + collName + " - Delete Succeeded: Doc ID: " + entryId);
      console.log(
      console.log(
      console.log(
      console.log(
      console.log("Collection: " + collName + " - Add Failed: " + error);
      console.log("Collection: " + collName + " - Add Failed: " + error);
      console.log("Collection: " + collName + " - Get All Failed: " + error);
      console.log("Collection: " + collName + " - showList Succeeded");
      console.log(res);
      delButtonStart.replace(/xxxxxx/g, obj.id) + delButtonName + buttonEnd;
      document.getElementById(mainDiv).innerHTML = html;
      document.getElementById(mainDiv).innerHTML = html;
      document.getElementById(mainDiv).innerHTML = html;
      editButtonStart.replace(/xxxxxx/g, obj.id) + editButtonName + buttonEnd;
      html +=
      html +=
      html += "</tr>";
      html += "</tr>";
      html += "<td>" + docData[obj] + "</td>";
      html += "<td>" + docFieldsArray[j].toUpperCase() + "</td>";
      html += "<td>" + docFieldsArray[j].toUpperCase() + "</td>";
      html += "<th class='align-top'>" + obj.toUpperCase() +":" + "</th>";
      html += "<tr>";
      html += "<tr>";
      let html = generateGetAllHTML(collName, res);
      let html = generateShowHTML(collName, v);
      let html = generateUpdateHTML(v);
      saveObj[docFieldsArray[i]] = document.getElementById(
      showList();
      showList();
      })
      });
    "</div>";
    "</div>";
    ">";
    "id" +
    '" size="20" type="hidden" value=' +
    '<button id="btndel_xxxxxx" class="btn btn-outline-warning ml-auto" type="button" onclick="deleteEntry(this.id.substring(7))">';
    '<button id="btnsho_xxxxxx" class="butn-pic" type="button" onclick="showEntry(this.id.substring(7))">';
    '<button id="btnupd_xxxxxx" class="btn btn-outline-warning ml-auto" type="button" onclick="updateEntry(this.id.substring(7))">';
    '<button type="button" class="btn btn-outline-warning ml-auto" onclick="addDocument();">Save</button>' +
    '<button type="button" class="btn btn-outline-warning ml-auto" onclick="showList();">Close</button>' +
    '<button type="button" class="btn btn-outline-warning ml-auto" onclick="showList();">Close</button>' +
    '<button type="button" class="btn btn-outline-warning ml-auto" onclick="showList();">Close</button>';
    '<button type="button" class="btn btn-outline-warning ml-auto" onclick="updateDocument();">Save</button>' +
    '<div class="floatright">' +
    '<div class="floatright">' +
    '<img src="https://cdn.glitch.me/e60cd810-ea10-4426-9986-137a6dcf8000/';
    '<img src="https://cdn.glitch.me/e60cd810-ea10-4426-9986-137a6dcf8000/';
    '<input id="edit_' +
    ).value;
    .catch(error => {
    .catch(error => {
    .catch(error => {
    .catch(error => {
    .catch(error => {
    .then(res => {
    .then(res => {
    .then(res => {
    .then(v => {
    .then(v => {
    collectionActionDelete(collName, entryId)
    docData["id"] +
    html +=
    html +=
    html += "</tr>";
    html += "<caption>" + closeButton + "</caption>";
    html += "<tr>";
    html += columnStart + textCardStart;
    html += divEnd + divEnd + divEnd;
    html += obj.name;
    html += picStart + obj.name + picEnd + buttonEnd;
    html += showButtonStart.replace(/xxxxxx/g, obj.id);
    html += textEnd;
    html += titleBodyStart + titleStart;
    if (docFieldsArray[j] != "id") {
    if (docFieldsArray[j] != "id") {
    if (i != idPos) {
    if (i != idPos) {
    let obj = docFieldsArray[i];
    let obj = res[i];
    let picEnd = '.png" class="card-img">';
    saveObj[docFieldsArray[i]] = document.getElementById(
    }
    }
    }
    }
    })
    })
    })
    })
    })
    });
    });
    });
    });
    });
   let picStart =
  */
  