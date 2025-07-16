// 获取元素
//Get Element
const searchForm = document.getElementById('search-form');
const searchButton = document.getElementById('search-button');

const searchInput = document.getElementById('search-input');
const searchEngineSelect = document.getElementById('search-engine');
const bg = document.getElementById('bg');

searchInput.addEventListener('focus', () => {
      bg.classList.add('blurred');
    });

searchInput.addEventListener('blur', () => {
      bg.classList.remove('blurred');
    });
// 检查 localStorage 是否已保存搜索引擎选择
//Check if localStorage has saved the search engine selection
if (localStorage.getItem('searchEngine')) {
  // 如果已保存，将选择恢复到保存的值
  //If saved, restore the selection to the saved value
  searchEngineSelect.value = localStorage.getItem('searchEngine');
}

// 监听搜索引擎选择框的变更事件
//Listen for change events of the search engine selection box
searchEngineSelect.addEventListener('change', function() {
  // 获取当前选定的搜索引擎值
  //Get the currently selected search engine value
  const selectedSearchEngine = searchEngineSelect.value;

  // 将搜索引擎值保存到 localStorage
  //Save search engine values to localStorage
  localStorage.setItem('searchEngine', selectedSearchEngine);
});

// 监听搜索按钮的点击事件
// Listen for click events of the search button
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    // 阻止表单默认提交行为
    // Prevent the form from submitting by default
    // 获取选定的搜索引擎值和搜索关键字
    // Get the selected search engine value and search keyword
    const searchEngineSelect = document.getElementById('search-engine');
    const selectedSearchEngine = searchEngineSelect.value;
    const searchKeyword = searchInput.value.trim();

    // 构建搜索URL
    // Build the search URL
    const searchURL = selectedSearchEngine + encodeURIComponent(searchKeyword);

    // 重定向到搜索URL
    // Redirect to the search URL
    window.location.href = searchURL;
});
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // 格式化时间，确保显示的数字都是两位数
    // Format the time to ensure that all displayed numbers are two digits
    var formattedTime = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
    
    // 将时间更新到指定的元素中
    // Update the time to the specified element
    document.getElementById("timet").textContent = formattedTime;
  }
  
  function padZero(number) {
    // 如果数字小于10，在前面补零
    // If the number is less than 10, add zeros in front
    return (number < 10 ? "0" : "") + number;
  }
  
  // 每秒更新一次时间
  // Update every second
  setInterval(updateTime, 1000);
