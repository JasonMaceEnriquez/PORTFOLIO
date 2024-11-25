function navigateTo(section) {
    if (section === 'Home') {
        window.location.href = 'index.html';
    } else if (section === 'About') {
        window.location.href = 'about.html';
    } else if (section === 'Contact') {
        window.location.href = 'contact.html';
    } else if (section === 'Projects') {
        window.location.href = 'projects.html';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
    
}// Toggle Sidebar Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

// Simulated Navigation
function navigateTo(page) {
    alert(`Navigating to ${page} page.`);
}

// Add hover animations for friend actions (Optional)
document.querySelectorAll('.friend-action').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('click', () => {
        alert('Messaging feature coming soon!');
    });
});
// Toggle Sidebar Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    sidebar.classList.toggle('hidden');  // Toggle the 'hidden' class to show/hide the sidebar

    // Optional: Add a class to the menuIcon to animate (optional)
    menuIcon.classList.toggle('active');
}
/* Default state for the sidebar (visible by default) */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    transition: transform 0.3s ease;
}

/* The sidebar will be hidden when the 'hidden' class is applied */
.sidebar.hidden {
    transform: translateX(-100%); /* Moves sidebar off-screen */
}

/* Hamburger Menu */
.menu-icon {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.menu-line {
    width: 30px;
    height: 4px;
    background-color: white;
}

/* Content Area, this will be pushed by the sidebar when it is open */
.main-content {
    margin-left: 250px;
    padding: 20px;
    transition: margin-left 0.3s ease;
}

/* Optional: When the sidebar is hidden, the content area can move back */
.sidebar.hidden ~ .main-content {
    margin-left: 0;
}
function editText() {
    const introText = document.getElementById("introText");
    const editTextArea = document.getElementById("editTextArea");
    const editButton = document.getElementById("editButton");

    // If text is not editable, make it editable
    if (introText.style.display !== "none") {
        introText.style.display = "none"; // Hide the p tag
        editTextArea.style.display = "block"; // Show the textarea
        editButton.innerText = "Save"; // Change button text to "Save"
    } else {
        introText.style.display = "block"; // Show the p tag
        editTextArea.style.display = "none"; // Hide the textarea
        introText.innerText = editTextArea.value; // Save the text from the textarea
        editButton.innerText = "Edit"; // Change button text back to "Edit"
    }
}
<script>
    // Read URL parameter for friend's name
    const urlParams = new URLSearchParams(window.location.search);
    const friendName = urlParams.get('friend');
    
    // Display the conversation based on the selected friend
    if (friendName) {
        document.getElementById("message-title").innerText = `Conversation with ${friendName}`;
        document.getElementById("message-content").innerText = `You are now chatting with ${friendName}.`;
    }
</script>
