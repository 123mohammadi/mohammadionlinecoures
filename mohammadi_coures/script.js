const courses = {
    computer: { name: "Computer Language", count: 0 },
    powerpoint: { name: "Microsoft PowerPoint", count: 0 },
    word: { name: "Microsoft Word", count: 0 },
    access: { name: "Microsoft Access", count: 0 }
};

let students = JSON.parse(localStorage.getItem('students')) || [];

// د کورسونو لیست تازه کول
function updateCoursesList() {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = '';
    
    Object.entries(courses).forEach(([key, course]) => {
        const div = document.createElement('div');
        div.className = 'course-item';
        div.innerHTML = `
            ${course.name}
            <span class="course-count">${course.count}</span>
        `;
        container.appendChild(div);
    });
}

// د شاګردانو لیست تازه کول
function updateStudentsList() {
    const container = document.getElementById('studentsContainer');
    container.innerHTML = '';
    
    students.forEach((student, index) => {
        const div = document.createElement('div');
        div.className = 'student-item';
        div.innerHTML = `
            <strong>${index + 1}.</strong> 
            ${student.name} - 
            ${student.course}
            <br><small>${student.email}</small>
        `;
        container.appendChild(div);
    });
}

// د فورم مدیریت
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newStudent = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        course: document.getElementById('course').value
    };
    
    students.push(newStudent);
    courses[newStudent.course].count++;
    
    localStorage.setItem('students', JSON.stringify(students));
    updateCoursesList();
    updateStudentsList();
    e.target.reset();
});

// لومړنی چارج کول
students.forEach(student => {
    courses[student.course].count++;
});

updateCoursesList();
updateStudentsList();

// د عکس کلیک ایونت
document.getElementById('teacherPhoto').addEventListener('click', () => {
    window.open('https://example.com/teacher-profile', '_blank');
});