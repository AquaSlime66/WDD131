// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function(sectionNum) {
        console.log(this.sections);
        const section = this.sections.find((section) => section.sectionNum === sectionNum);
        if (section){
            section.enrolled++;
        }
    }
  };

aCourse.name;

// aCourse.sections[1].roomNum
// aCourse.sections.find(item => item.roomNum == "STC 347")
// // OR
// aCourse.sections.find(function(item) {return item.roomNum == "STC 347"})
//remember that referecning the array items starts at 0, just like indexs

function setCourseInfo(course){
    const courseNameEL = document.querySelector("#courseName");
    const courseCodeEL = document.querySelector("#courseCode");

    courseNameEL.innerText = `${course.name}`;
    courseCodeEL.innerHTML = `${course.code}`;
}

function sectionTemplate(section){
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`;
}

function renderSectionsCeaser(sections){
    const sectionListEL = document.querySelector("#sections");
    const html = sections.map(sectionTemplate);
    sectionListEL.innerHTML = html.join("");

}

setCourseInfo(aCourse);

renderSectionsCeaser(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function() {const sectionNum = document.querySelector("#sectionNumber").value; 
aCourse.enrollStudent(sectionNum);
})
