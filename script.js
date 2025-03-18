// Initialize Lucide icons
lucide.createIcons();

// State
let videos = [
    // All/Featured Videos
    {
        id: '1',
        title: 'Beautiful Sunset at Beach',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        views: 1234,
        uploadedAt: '2 days ago',
        category: 'all'
    },
    {
        id: '2',
        title: 'Mountain Climbing Adventure',
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        views: 5678,
        uploadedAt: '1 week ago',
        category: 'sports'
    },
    // Music Videos
    {
        id: '3',
        title: 'Live Concert Performance',
        url: 'https://images.unsplash.com/photo-1501612780327-45045538702b',
        thumbnail: 'https://images.unsplash.com/photo-1501612780327-45045538702b',
        views: 45000,
        uploadedAt: '5 days ago',
        category: 'music'
    },
    {
        id: '4',
        title: 'Piano Composition Tutorial',
        url: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
        thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
        views: 23000,
        uploadedAt: '1 week ago',
        category: 'music'
    },
    // Gaming Videos
    {
        id: '5',
        title: 'Pro Gaming Setup Tour',
        url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
        views: 89000,
        uploadedAt: '3 days ago',
        category: 'gaming'
    },
    {
        id: '6',
        title: 'Esports Tournament Highlights',
        url: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
        thumbnail: 'https://images.unsplash.com/photo-1542751110-97427bbecf20',
        views: 120000,
        uploadedAt: '1 day ago',
        category: 'gaming'
    },
    // Sports Videos
    {
        id: '7',
        title: 'Mountain Biking Extreme',
        url: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0',
        thumbnail: 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0',
        views: 67000,
        uploadedAt: '4 days ago',
        category: 'sports'
    },
    // Entertainment
    {
        id: '8',
        title: 'Behind the Scenes - Movie Making',
        url: 'https://images.unsplash.com/photo-1500210557-5db7d16ed975',
        thumbnail: 'https://images.unsplash.com/photo-1500210557-5db7d16ed975',
        views: 230000,
        uploadedAt: '6 days ago',
        category: 'entertainment'
    },
    // News
    {
        id: '9',
        title: 'Tech News Roundup 2025',
        url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
        thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c',
        views: 45000,
        uploadedAt: '12 hours ago',
        category: 'news'
    },
    // Learning
    {
        id: '10',
        title: 'Advanced Mathematics Tutorial',
        url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
        views: 34000,
        uploadedAt: '2 days ago',
        category: 'learning'
    },
    // Fashion
    {
        id: '11',
        title: 'Spring Fashion Trends 2025',
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
        thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
        views: 78000,
        uploadedAt: '3 days ago',
        category: 'fashion'
    },
    // Beauty
    {
        id: '12',
        title: 'Natural Makeup Tutorial',
        url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
        thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
        views: 92000,
        uploadedAt: '5 days ago',
        category: 'beauty'
    },
    // Science
    {
        id: '13',
        title: 'Space Exploration Documentary',
        url: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2',
        thumbnail: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2',
        views: 56000,
        uploadedAt: '1 week ago',
        category: 'science'
    },
    // Technology
    {
        id: '14',
        title: 'Future of AI Technology',
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
        views: 143000,
        uploadedAt: '2 days ago',
        category: 'technology'
    }
];

let isSidebarOpen = true;
let editingId = null;
let currentCategory = 'all';

// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');
const videosGrid = document.getElementById('videos-grid');
const emptyState = document.getElementById('empty-state');
const categoryButtons = document.querySelectorAll('.category-btn');

// Event Listeners
menuToggle.addEventListener('click', toggleSidebar);
uploadBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFileUpload);
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent?.toLowerCase() || 'all';
        setActiveCategory(category);
    });
});

// Functions
function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    sidebar.classList.toggle('collapsed', !isSidebarOpen);
    main.classList.toggle('expanded', !isSidebarOpen);
}

function formatViews(views) {
    if (views >= 1000000) {
        return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
        return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
}

function handleFileUpload(event) {
    const file = event.target.files?.[0];
    if (file) {
        const videoUrl = URL.createObjectURL(file);
        const video = {
            id: Math.random().toString(36).substr(2, 9),
            title: file.name.replace(/\.[^/.]+$/, ""),
            url: videoUrl,
            thumbnail: videoUrl,
            views: 0,
            uploadedAt: 'Just now',
            category: currentCategory
        };
        videos = [video, ...videos];
        renderVideos();
        fileInput.value = '';
    }
}

function deleteVideo(id) {
    videos = videos.filter(video => video.id !== id);
    renderVideos();
}

function startEditing(video) {
    editingId = video.id;
    renderVideos();
}

function saveEdit(id, newTitle) {
    videos = videos.map(video =>
        video.id === id ? { ...video, title: newTitle } : video
    );
    editingId = null;
    renderVideos();
}

function setActiveCategory(category) {
    currentCategory = category;
    categoryButtons.forEach(button => {
        button.classList.toggle('active', button.textContent?.toLowerCase() === category);
    });
    renderVideos();
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    const isEditing = editingId === video.id;
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="play-icon">
                <i data-lucide="play"></i>
            </div>
        </div>
        <div class="video-info">
            ${isEditing ? `
                <form class="edit-form" onsubmit="event.preventDefault(); saveEdit('${video.id}', this.title.value)">
                    <input class="edit-input" name="title" value="${video.title}">
                    <button class="save-btn" type="submit">Save</button>
                </form>
            ` : `
                <div class="video-meta">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="video-actions">
                        <button class="action-btn" onclick="startEditing(${JSON.stringify(video)})">
                            <i data-lucide="pencil"></i>
                        </button>
                        <button class="action-btn delete" onclick="deleteVideo('${video.id}')">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
                <div class="video-stats">
                    ${formatViews(video.views)} • ${video.uploadedAt}
                </div>
            `}
        </div>
    `;
    
    // Re-initialize icons for the new card
    lucide.createIcons({
        icons: {
            Play: lucide.icons.play,
            Pencil: lucide.icons.pencil,
            Trash2: lucide.icons['trash-2']
        },
        element: card
    });
    
    return card;
}

function renderVideos() {
    videosGrid.innerHTML = '';
    const filteredVideos = currentCategory === 'all' 
        ? videos 
        : videos.filter(video => video.category === currentCategory);
    
    emptyState.style.display = filteredVideos.length === 0 ? 'block' : 'none';
    
    filteredVideos.forEach(video => {
        videosGrid.appendChild(createVideoCard(video));
    });
}

// Initial render
renderVideos();