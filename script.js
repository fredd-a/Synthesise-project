
    const state = {
    filter: "all",
    query: "",
    done: new Set()
    };

    const topicKey = (code, wi, ti) => `${code}-${wi}-${ti}`;

    function findCourse(code) {
    return COURSES.find(c => c.code === code);
    }

    function totalTopics(course) {
    return course.weeks.reduce((n, w) => n + w.topics.length, 0);
    }

    function doneTopics(course) {
    let n = 0;
    course.weeks.forEach((w, wi) => {
        w.topics.forEach((_, ti) => {
        if (state.done.has(topicKey(course.code, wi, ti))) n++;
        });
    });
    return n;
    }

    function fileKind(path) {
    if (!path) return null;
    const ext = path.split(".").pop().toLowerCase();
    if (ext === "pdf") return { label: "PDF", cls: "pdf" };
    if (ext === "pptx" || ext === "ppt") return { label: "PPT", cls: "ppt" };
    return { label: ext.toUpperCase(), cls: "" };
    }

    function renderList() {
    const q = state.query.toLowerCase();

    const courses = COURSES.filter(c =>
        (state.filter === "all" || c.status === state.filter) &&
        (c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q))
    );

    const grid = document.getElementById("grid");

    if (courses.length === 0) {
        grid.innerHTML = `<p class="empty">No courses match your search.</p>`;
        return;
    }

    grid.innerHTML = courses.map((c, i) => {
        const s = STATUS[c.status];
        const total = totalTopics(c);
        const pct = total ? Math.round(doneTopics(c) / total * 100) : 0;

        return `
        <div class="card" style="--i:${i}; border-left-color:${s.color}" data-code="${c.code}">
            <span class="badge" style="background:${s.color}">${s.label}</span>
            <h3>${c.code}: ${c.title}</h3>
            <small>${c.weeks.length} weeks · ${total} topics</small>
            <div class="progress"><div style="width:${pct}%"></div></div>
        </div>`;
    }).join("");

    requestAnimationFrame(() => {
        grid.querySelectorAll(".progress div").forEach(bar => {
        bar.style.width = bar.style.width;
        });
    });
    }

    function openCourse(code) {
    const c = findCourse(code);
    const s = STATUS[c.status];

    document.getElementById("detail").innerHTML = `
        <div class="course-head">
        <span class="badge" style="background:${s.color}">${s.label}</span>
        <h2>${c.code}: ${c.title}</h2>
        <small id="progress-text"></small>
        <div class="progress"><div id="progress-bar"></div></div>
        </div>

        ${c.weeks.map((w, wi) => `
        <details class="week" ${wi === 0 ? "open" : ""}>
            <summary>${w.title}</summary>
            <ul>
            ${w.topics.map((t, ti) => {
                const key = topicKey(c.code, wi, ti);
                const checked = state.done.has(key);
                const kind = fileKind(t.file);

                return `
                <li class="topic" style="--i:${ti}">
                    <input type="checkbox" id="${key}" data-key="${key}" data-code="${c.code}" ${checked ? "checked" : ""}>
                    <label for="${key}" class="${checked ? "done-text" : ""}">${t.name}</label>
                    ${kind ? `<span class="file-tag ${kind.cls}">${kind.label}</span>` : ""}
                    ${t.file
                    ? `<a class="open-btn" href="${t.file}" target="_blank" rel="noopener">Open</a>`
                    : `<span class="open-btn disabled">No file yet</span>`}
                </li>`;
            }).join("")}
            </ul>
        </details>`).join("")}
    `;

    updateProgress(c);

    document.getElementById("list-view").classList.add("hidden");
    const detailView = document.getElementById("detail-view");
    detailView.classList.remove("hidden");

    detailView.style.animation = "none";
    void detailView.offsetWidth;
    detailView.style.animation = "";
    window.scrollTo(0, 0);
    }

    function updateProgress(course) {
    const total = totalTopics(course);
    const done = doneTopics(course);
    const pct = total ? Math.round(done / total * 100) : 0;

    document.getElementById("progress-text").textContent =
        `${done} of ${total} topics revised`;
    document.getElementById("progress-bar").style.width = pct + "%";
    }

    function showList() {
    document.getElementById("detail-view").classList.add("hidden");
    document.getElementById("list-view").classList.remove("hidden");
    renderList();
    }

    function toggleTopic(key, code, checkbox) {
    if (state.done.has(key)) {
        state.done.delete(key);
    } else {
        state.done.add(key);
    }


    const label = document.querySelector(`label[for="${key}"]`);
    label.classList.toggle("done-text", state.done.has(key));

    updateProgress(findCourse(code));
    }

    document.getElementById("grid").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) openCourse(card.dataset.code);
    });

    document.getElementById("detail").addEventListener("change", e => {
    if (e.target.matches("input[type=checkbox]")) {
        toggleTopic(e.target.dataset.key, e.target.dataset.code, e.target);
    }
    });

    document.getElementById("back").addEventListener("click", showList);

    document.getElementById("search").addEventListener("input", e => {
    state.query = e.target.value;
    renderList();
    });

    document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.filter = btn.dataset.filter;
        renderList();
    });
    });

    renderList();