const HF_BASE_URL = "https://huggingface.co/datasets/AbcZero/S4DLC/resolve/main/";
const HF_TREE_API_BASE_URL = "https://huggingface.co/api/datasets/AbcZero/S4DLC/tree/main/";

const PACKS = [
  { code: "EA DLC Unlocker v2 145", path: "EA DLC Unlocker v2 145", category: "Core", name: "EA DLC Unlocker v2 145", releaseDate: "-" },

  { code: "EP01", path: "EP01", category: "Expansion Pack", name: "Get To Work", releaseDate: "03/31/2015" },
  { code: "EP02", path: "EP02", category: "Expansion Pack", name: "Get Together", releaseDate: "12/08/2015" },
  { code: "EP03", path: "EP03", category: "Expansion Pack", name: "City Living", releaseDate: "11/01/2016" },
  { code: "EP04", path: "EP04", category: "Expansion Pack", name: "Cats & Dogs", releaseDate: "11/10/2017" },
  { code: "EP05", path: "EP05", category: "Expansion Pack", name: "Seasons", releaseDate: "06/22/2018" },
  { code: "EP06", path: "EP06", category: "Expansion Pack", name: "Get Famous", releaseDate: "11/16/2018" },
  { code: "EP07", path: "EP07", category: "Expansion Pack", name: "Island Living", releaseDate: "06/21/2019" },
  { code: "EP08", path: "EP08", category: "Expansion Pack", name: "Discover University", releaseDate: "11/15/2019" },
  { code: "EP09", path: "EP09", category: "Expansion Pack", name: "Eco Lifestyle", releaseDate: "06/05/2020" },
  { code: "EP10", path: "EP10", category: "Expansion Pack", name: "Snowy Escape", releaseDate: "11/13/2020" },
  { code: "EP11", path: "EP11", category: "Expansion Pack", name: "Cottage Living", releaseDate: "07/22/2021" },
  { code: "EP12", path: "EP12", category: "Expansion Pack", name: "High School Years", releaseDate: "07/28/2022" },
  { code: "EP13", path: "EP13", category: "Expansion Pack", name: "Growing Together", releaseDate: "03/16/2023" },
  { code: "EP14", path: "EP14", category: "Expansion Pack", name: "Horse Ranch", releaseDate: "07/20/2023" },
  { code: "EP15", path: "EP15", category: "Expansion Pack", name: "For Rent", releaseDate: "12/07/2023" },
  { code: "EP16", path: "EP16", category: "Expansion Pack", name: "Lovestruck", releaseDate: "07/25/2024" },
  { code: "EP17", path: "EP17", category: "Expansion Pack", name: "Life & Death", releaseDate: "10/31/2024" },
  { code: "EP18", path: "EP18", category: "Expansion Pack", name: "Businesses & Hobbies", releaseDate: "03/06/2025" },
  { code: "EP19", path: "EP19", category: "Expansion Pack", name: "Enchanted by Nature", releaseDate: "07/10/2025" },
  { code: "EP20", path: "EP20", category: "Expansion Pack", name: "Adventure Awaits", releaseDate: "10/02/2025" },
  { code: "EP21", path: "EP21", category: "Expansion Pack", name: "Royalty & Legacy", releaseDate: "02/12/2026" },

  { code: "GP01", path: "GP01", category: "Game Pack", name: "Outdoor Retreat", releaseDate: "01/13/2015" },
  { code: "GP02", path: "GP02", category: "Game Pack", name: "Spa Day", releaseDate: "07/06/2015" },
  { code: "GP03", path: "GP03", category: "Game Pack", name: "Dine Out", releaseDate: "06/07/2016" },
  { code: "GP04", path: "GP04", category: "Game Pack", name: "Vampires", releaseDate: "01/24/2017" },
  { code: "GP05", path: "GP05", category: "Game Pack", name: "Parenthood", releaseDate: "05/30/2017" },
  { code: "GP06", path: "GP06", category: "Game Pack", name: "Jungle Adventure", releaseDate: "02/27/2018" },
  { code: "GP07", path: "GP07", category: "Game Pack", name: "StrangerVille", releaseDate: "02/26/2019" },
  { code: "GP08", path: "GP08", category: "Game Pack", name: "Realm of Magic", releaseDate: "09/10/2019" },
  { code: "GP09", path: "GP09", category: "Game Pack", name: "Star Wars: Journey to Batuu", releaseDate: "09/08/2020" },
  { code: "GP10", path: "GP10", category: "Game Pack", name: "Dream Home Decorator", releaseDate: "06/01/2021" },
  { code: "GP11", path: "GP11", category: "Game Pack", name: "My Wedding Stories", releaseDate: "02/23/2022" },
  { code: "GP12", path: "GP12", category: "Game Pack", name: "Werewolves", releaseDate: "06/16/2022" },

  { code: "SP01", path: "SP01", category: "Stuff Pack", name: "Luxury Party Stuff", releaseDate: "05/19/2015" },
  { code: "SP02", path: "SP02", category: "Stuff Pack", name: "Perfect Patio Stuff", releaseDate: "06/16/2015" },
  { code: "SP03", path: "SP03", category: "Stuff Pack", name: "Cool Kitchen Stuff", releaseDate: "08/11/2015" },
  { code: "SP04", path: "SP04", category: "Stuff Pack", name: "Spooky Stuff", releaseDate: "09/29/2015" },
  { code: "SP05", path: "SP05", category: "Stuff Pack", name: "Movie Hangout Stuff", releaseDate: "01/12/2016" },
  { code: "SP06", path: "SP06", category: "Stuff Pack", name: "Romantic Garden Stuff", releaseDate: "02/09/2016" },
  { code: "SP07", path: "SP07", category: "Stuff Pack", name: "Kids Room Stuff", releaseDate: "06/28/2016" },
  { code: "SP08", path: "SP08", category: "Stuff Pack", name: "Backyard Stuff", releaseDate: "07/19/2016" },
  { code: "SP09", path: "SP09", category: "Stuff Pack", name: "Vintage Glamour Stuff", releaseDate: "12/06/2016" },
  { code: "SP10", path: "SP10", category: "Stuff Pack", name: "Bowling Night Stuff", releaseDate: "03/29/2017" },
  { code: "SP11", path: "SP11", category: "Stuff Pack", name: "Fitness Stuff", releaseDate: "06/20/2017" },
  { code: "SP12", path: "SP12", category: "Stuff Pack", name: "Toddler Stuff", releaseDate: "08/24/2017" },
  { code: "SP13", path: "SP13", category: "Stuff Pack", name: "Laundry Day Stuff", releaseDate: "01/16/2018" },
  { code: "SP14", path: "SP14", category: "Stuff Pack", name: "My First Pet Stuff", releaseDate: "03/13/2018" },
  { code: "SP15", path: "SP15", category: "Stuff Pack", name: "Moshino Stuff Pack", releaseDate: "08/13/2019" },
  { code: "SP16", path: "SP16", category: "Stuff Pack", name: "Tiny Living", releaseDate: "01/21/2020" },
  { code: "SP17", path: "SP17", category: "Stuff Pack", name: "Nifty Knitting", releaseDate: "07/28/2020" },
  { code: "SP18", path: "SP18", category: "Stuff Pack", name: "Paranormal", releaseDate: "01/26/2021" },
  { code: "SP46", path: "SP46", category: "Stuff Pack", name: "Home Chef Hustle Stuff", releaseDate: "09/28/2023" },
  { code: "SP49", path: "SP49", category: "Stuff Pack", name: "Crystal Creations Stuff Pack", releaseDate: "02/29/2024" },

  { code: "SP20", path: "SP20", category: "Kit", name: "Throwback Fit Kit", releaseDate: "03/02/2021" },
  { code: "SP21", path: "SP21", category: "Kit", name: "Country Kitchen Kit", releaseDate: "03/02/2021" },
  { code: "SP22", path: "SP22", category: "Kit", name: "Bust The Dust Kit", releaseDate: "03/02/2021" },
  { code: "SP23", path: "SP23", category: "Kit", name: "Courtyard Oasis Kit", releaseDate: "05/18/2021" },
  { code: "SP24", path: "SP24", category: "Kit", name: "Fashion Street-Set", releaseDate: "10/05/2021" },
  { code: "SP25", path: "SP25", category: "Kit", name: "Industrial Loft Kit", releaseDate: "08/26/2021" },
  { code: "SP26", path: "SP26", category: "Kit", name: "Incheon Arrivals Kit", releaseDate: "10/05/2021" },
  { code: "SP28", path: "SP28", category: "Kit", name: "Modern Menswear Kit", releaseDate: "12/02/2021" },
  { code: "SP29", path: "SP29", category: "Kit", name: "Blooming Rooms Kit", releaseDate: "11/09/2021" },
  { code: "SP30", path: "SP30", category: "Kit", name: "Carnaval Streetwear Kit", releaseDate: "02/03/2022" },
  { code: "SP31", path: "SP31", category: "Kit", name: "Decor to the Max Kit", releaseDate: "03/21/2022" },
  { code: "SP32", path: "SP32", category: "Kit", name: "Moonlight Chic Kit", releaseDate: "05/26/2022" },
  { code: "SP33", path: "SP33", category: "Kit", name: "Little Campers Kit", releaseDate: "05/26/2022" },
  { code: "SP34", path: "SP34", category: "Kit", name: "First Fits Kit", releaseDate: "09/01/2022" },
  { code: "SP35", path: "SP35", category: "Kit", name: "Desert Luxe Kit", releaseDate: "09/14/2022" },
  { code: "SP36", path: "SP36", category: "Kit", name: "Pastel Pop Kit", releaseDate: "11/10/2022" },
  { code: "SP37", path: "SP37", category: "Kit", name: "Everyday Clutter Kit", releaseDate: "11/10/2022" },
  { code: "SP38", path: "SP38", category: "Kit", name: "Simtimates Collection Kit", releaseDate: "01/19/2023" },
  { code: "SP39", path: "SP39", category: "Kit", name: "Bathroom Clutter Kit", releaseDate: "01/19/2023" },
  { code: "SP40", path: "SP40", category: "Kit", name: "Greenhouse Haven Kit", releaseDate: "04/20/2023" },
  { code: "SP41", path: "SP41", category: "Kit", name: "Basement Treasures Kit", releaseDate: "04/20/2023" },
  { code: "SP42", path: "SP42", category: "Kit", name: "Grunge Revival Kit", releaseDate: "06/01/2023" },
  { code: "SP43", path: "SP43", category: "Kit", name: "Book Nook Kit", releaseDate: "06/01/2023" },
  { code: "SP44", path: "SP44", category: "Kit", name: "Poolside Splash Kit", releaseDate: "09/07/2023" },
  { code: "SP45", path: "SP45", category: "Kit", name: "Modern Luxe Kit", releaseDate: "09/07/2023" },
  { code: "SP47", path: "SP47", category: "Kit", name: "Castle Estate Kit", releaseDate: "01/18/2024" },
  { code: "SP48", path: "SP48", category: "Kit", name: "Goth Galore Kit", releaseDate: "01/18/2024" },
  { code: "SP50", path: "SP50", category: "Kit", name: "Urban Homage Kit", releaseDate: "04/18/2024" },
  { code: "SP51", path: "SP51", category: "Kit", name: "Party Essentials Kit", releaseDate: "04/18/2024" },
  { code: "SP52", path: "SP52", category: "Kit", name: "Riviera Retreat Kit", releaseDate: "05/30/2024" },
  { code: "SP53", path: "SP53", category: "Kit", name: "Cozy Bistro Kit", releaseDate: "05/30/2024" },
  { code: "SP54", path: "SP54", category: "Kit", name: "Artist Studio Kit", releaseDate: "09/19/2024" },
  { code: "SP55", path: "SP55", category: "Kit", name: "Storybook Nursery Kit", releaseDate: "09/19/2024" },
  { code: "SP58", path: "SP58", category: "Kit", name: "Comfy Gamer Kit", releaseDate: "01/16/2025" },
  { code: "SP59", path: "SP59", category: "Kit", name: "Secret Sanctuary Kit", releaseDate: "01/16/2025" },
  { code: "SP60", path: "SP60", category: "Kit", name: "Casanova Cave Kit", releaseDate: "01/16/2025" },
  { code: "SP65", path: "SP65", category: "Kit", name: "Restoration Workshop Kit", releaseDate: "05/01/2025" },
  { code: "SP66", path: "SP66", category: "Kit", name: "Golden Years Kit", releaseDate: "05/01/2025" },
  { code: "SP67", path: "SP67", category: "Kit", name: "Kitchen Clutter Kit", releaseDate: "05/01/2025" },
  { code: "SP68", path: "SP68", category: "Kit", name: "SpongeBob's House Kit", releaseDate: "12/04/2025" },
  { code: "SP69", path: "SP69", category: "Kit", name: "Autumn Apparel Kit", releaseDate: "10/09/2025" },
  { code: "SP70", path: "SP70", category: "Kit", name: "SpongeBob Kid's Room Kit", releaseDate: "12/04/2025" },
  { code: "SP76", path: "SP76", category: "Kit", name: "Silver Screen Style Kit", releaseDate: "02/12/2026" },
  { code: "SP77", path: "SP77", category: "Kit", name: "Tea Time Solarium Kit", releaseDate: "02/12/2026" },

  { code: "SP56", path: "SP56", category: "Creator Kit", name: "Sweet Slumber Party Kit", releaseDate: "11/14/2024" },
  { code: "SP57", path: "SP57", category: "Creator Kit", name: "Cozy Kitsch Kit", releaseDate: "11/14/2024" },
  { code: "SP61", path: "SP61", category: "Creator Kit", name: "Refined Living Room Kit", releaseDate: "01/30/2025" },
  { code: "SP62", path: "SP62", category: "Creator Kit", name: "Business Chic Kit", releaseDate: "01/30/2025" },
  { code: "SP63", path: "SP63", category: "Creator Kit", name: "Sleek Bathroom Kit", releaseDate: "04/10/2025" },
  { code: "SP64", path: "SP64", category: "Creator Kit", name: "Sweet Allure Kit", releaseDate: "04/10/2025" },
  { code: "SP71", path: "SP71", category: "Creator Kit", name: "Grange Mudroom Kit", releaseDate: "08/21/2025" },
  { code: "SP72", path: "SP72", category: "Creator Kit", name: "Essential Glam Kit", releaseDate: "08/21/2025" },
  { code: "SP73", path: "SP73", category: "Creator Kit", name: "Modern Retreat Kit", releaseDate: "11/13/2025" },
  { code: "SP74", path: "SP74", category: "Creator Kit", name: "Garden to Table Kit", releaseDate: "11/13/2025" },
  { code: "SP81", path: "SP81", category: "Creator Kit", name: "Prairie Dreams Set", releaseDate: "12/11/2025" },

  { code: "FP01", path: "FP01", category: "Extra Content", name: "Holiday", releaseDate: "12/01/2014" }
];

const packsBody = document.getElementById("packsBody");
const selectionCount = document.getElementById("selectionCount");
const statusText = document.getElementById("statusText");
const selectAllBtn = document.getElementById("selectAllBtn");
const toggleAllBtn = document.getElementById("toggleAllBtn");
const selectNoneBtn = document.getElementById("selectNoneBtn");
const downloadBtn = document.getElementById("downloadBtn");
const confirmModal = document.getElementById("confirmModal");
const confirmMessage = document.getElementById("confirmMessage");
const confirmYesBtn = document.getElementById("confirmYesBtn");
const confirmNoBtn = document.getElementById("confirmNoBtn");

let queuedPacks = [];
let isDownloading = false;

function encodePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function createDownloadUrl(path) {
  return `${HF_BASE_URL}${encodePath(path)}?download=true`;
}

function createTreeApiUrl(path) {
  return `${HF_TREE_API_BASE_URL}${encodePath(path)}?recursive=true`;
}

function setStatus(text) {
  statusText.textContent = text;
}

function getCheckboxes() {
  return packsBody.querySelectorAll(".pack-check");
}

function updateSelectionCount() {
  const selected = getSelectedPacks();
  selectionCount.textContent = `${selected.length} selected`;
  downloadBtn.disabled = selected.length === 0 || isDownloading;
}

function getSelectedPacks() {
  const selected = [];
  for (const checkbox of getCheckboxes()) {
    if (!checkbox.checked) {
      continue;
    }
    const index = Number(checkbox.dataset.index);
    selected.push(PACKS[index]);
  }
  return selected;
}

function setAllSelections(value) {
  for (const checkbox of getCheckboxes()) {
    checkbox.checked = value;
  }
  updateSelectionCount();
}

function toggleSelections() {
  for (const checkbox of getCheckboxes()) {
    checkbox.checked = !checkbox.checked;
  }
  updateSelectionCount();
}

function openConfirmModal(selected) {
  queuedPacks = selected;
  confirmMessage.textContent = `Download files from ${selected.length} selected folder(s) one by one?`;
  confirmModal.classList.remove("hidden");
}

function closeConfirmModal() {
  confirmModal.classList.add("hidden");
}

function setControlsDisabled(disabled) {
  selectAllBtn.disabled = disabled;
  toggleAllBtn.disabled = disabled;
  selectNoneBtn.disabled = disabled;
  downloadBtn.disabled = disabled || getSelectedPacks().length === 0;
  for (const checkbox of getCheckboxes()) {
    checkbox.disabled = disabled;
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function resolveFilesForPack(pack) {
  const response = await fetch(createTreeApiUrl(pack.path));
  if (!response.ok) {
    if (response.status === 404) {
      return [{ pack, filePath: pack.path }];
    }
    throw new Error(`Failed to resolve ${pack.code} (${response.status})`);
  }

  const entries = await response.json();
  if (!Array.isArray(entries)) {
    return [{ pack, filePath: pack.path }];
  }

  const files = [];
  for (const entry of entries) {
    if (entry.type !== "file" || typeof entry.path !== "string") {
      continue;
    }
    files.push({ pack, filePath: entry.path });
  }

  if (files.length === 0) {
    files.push({ pack, filePath: pack.path });
  }
  return files;
}

async function resolveDownloadQueue(selected) {
  const queue = [];
  const failed = [];
  const seen = new Set();

  for (let i = 0; i < selected.length; i += 1) {
    const pack = selected[i];
    setStatus(`Resolving ${i + 1}/${selected.length}: ${pack.code} - ${pack.name}`);
    try {
      const files = await resolveFilesForPack(pack);
      for (const item of files) {
        if (seen.has(item.filePath)) {
          continue;
        }
        seen.add(item.filePath);
        queue.push(item);
      }
    } catch (_error) {
      failed.push(pack);
    }
  }

  return { queue, failed };
}

async function queueDownload(filePath) {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = createDownloadUrl(filePath);
  document.body.appendChild(iframe);
  await wait(80);
  iframe.remove();
}

async function startDownloads(selected) {
  isDownloading = true;
  setControlsDisabled(true);
  setStatus(`Resolving files from ${selected.length} selected folder(s)...`);
  const { queue, failed } = await resolveDownloadQueue(selected);

  if (queue.length === 0) {
    if (failed.length > 0) {
      setStatus(`Could not resolve selected folders: ${failed.map((pack) => pack.code).join(", ")}`);
    } else {
      setStatus("No files found for selected folders.");
    }
    isDownloading = false;
    setControlsDisabled(false);
    updateSelectionCount();
    return;
  }

  setStatus(`Starting ${queue.length} file download(s)...`);
  for (let i = 0; i < queue.length; i += 1) {
    const item = queue[i];
    setStatus(`Starting download ${i + 1}/${queue.length}: ${item.pack.code} (${item.filePath})`);
    await queueDownload(item.filePath);
  }

  if (failed.length > 0) {
    setStatus(`Queued ${queue.length} file download(s). Failed folders: ${failed.map((pack) => pack.code).join(", ")}`);
  } else {
    setStatus(`Queued ${queue.length} file download(s) from ${selected.length} folder(s). If your browser asks, allow multiple automatic downloads.`);
  }
  isDownloading = false;
  setControlsDisabled(false);
  updateSelectionCount();
}

function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}

function renderRows() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < PACKS.length; i += 1) {
    const pack = PACKS[i];
    const row = document.createElement("tr");

    const checkCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "pack-check";
    checkbox.dataset.index = String(i);
    checkbox.addEventListener("change", updateSelectionCount);
    checkCell.appendChild(checkbox);

    row.appendChild(checkCell);
    row.appendChild(createCell(pack.code));
    row.appendChild(createCell(pack.category));
    row.appendChild(createCell(pack.name));
    row.appendChild(createCell(pack.releaseDate));

    fragment.appendChild(row);
  }

  packsBody.appendChild(fragment);
}

selectAllBtn.addEventListener("click", () => {
  if (isDownloading) {
    return;
  }
  setAllSelections(true);
});

toggleAllBtn.addEventListener("click", () => {
  if (isDownloading) {
    return;
  }
  toggleSelections();
});

selectNoneBtn.addEventListener("click", () => {
  if (isDownloading) {
    return;
  }
  setAllSelections(false);
});

downloadBtn.addEventListener("click", () => {
  if (isDownloading) {
    return;
  }
  const selected = getSelectedPacks();
  if (selected.length === 0) {
    setStatus("Select at least one item.");
    return;
  }
  openConfirmModal(selected);
});

confirmNoBtn.addEventListener("click", () => {
  queuedPacks = [];
  closeConfirmModal();
});

confirmYesBtn.addEventListener("click", async () => {
  const selected = [...queuedPacks];
  queuedPacks = [];
  closeConfirmModal();
  await startDownloads(selected);
});

confirmModal.addEventListener("click", (event) => {
  if (event.target === confirmModal) {
    queuedPacks = [];
    closeConfirmModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !confirmModal.classList.contains("hidden")) {
    queuedPacks = [];
    closeConfirmModal();
  }
});

renderRows();
updateSelectionCount();
setStatus(`Ready. Loaded ${PACKS.length} items.`);
