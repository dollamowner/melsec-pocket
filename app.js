
const data = [
 {id:"mov",kind:"command",series:["Q"],code:"MOV(P)",name:"16비트 데이터 전송",desc:"소스(S)로 지정한 데이터를 데스티네이션(D)에 전송하는 기본 명령어입니다.",syntax:"MOV  S  D  /  MOVP  S  D",example:"예시 문법: MOV K10 D0",page:"6-78",section:"6.4.1",keywords:"데이터 이동 전송 소스 데스티네이션"},
 {id:"dmov",kind:"command",series:["Q"],code:"DMOV(P)",name:"32비트 데이터 전송",desc:"32비트 데이터 전송 명령입니다. 지원 CPU와 디바이스 조건을 원본 표에서 확인하세요.",syntax:"DMOV  S  D  /  DMOVP  S  D",example:"32비트 데이터 전송",page:"6-78",section:"6.4.1",keywords:"데이터 이동 전송 더블워드"},
 {id:"cml",kind:"command",series:["Q"],code:"CML(P)",name:"16비트 데이터 부정 전송",desc:"매뉴얼의 데이터 전송 명령 분류에 있는 16비트 데이터 부정 전송 명령입니다.",syntax:"CML  S  D  /  CMLP  S  D",example:"원본의 디바이스 조건과 결과는 상세 절을 확인하세요.",page:"6-84",section:"6.4.4",keywords:"부정 전송 반전 데이터"},
 {id:"dcml",kind:"command",series:["Q"],code:"DCML(P)",name:"32비트 데이터 부정 전송",desc:"32비트 데이터 부정 전송 명령입니다.",syntax:"DCML  S  D  /  DCMLP  S  D",example:"32비트 데이터 부정 전송",page:"6-84",section:"6.4.4",keywords:"부정 전송 반전 데이터"},
 {id:"bmov",kind:"command",series:["Q"],code:"BMOV(P)",name:"블록 16비트 데이터 전송",desc:"소스(S)에서 지정한 디바이스부터 n점의 16비트 데이터를 데스티네이션(D)에서 지정한 디바이스부터 일괄 전송합니다.",syntax:"BMOV  S  D  n  /  BMOVP  S  D  n",example:"예: BMOV D0 D100 K5 — D0부터 시작하는 5점의 데이터를 D100부터 전송하는 형식입니다. 실제 디바이스 범위와 조건은 CPU별로 확인하세요.",page:"6-87",section:"6.4.5",keywords:"블록 전송 일괄 복사 워드 n 전송 수",error:"디바이스 범위를 초과하는 경우 매뉴얼은 연산 에러 4101을 설명합니다. 특수 다이렉트 디바이스 사용 시 전송 수 제한도 확인해야 합니다."},
 {id:"fmov",kind:"command",series:["Q"],code:"FMOV(P)",name:"동일 16비트 데이터 블록 전송",desc:"동일한 데이터를 블록 영역에 전송하는 명령입니다.",syntax:"FMOV  S  D  n  /  FMOVP  S  D  n",example:"원본 매뉴얼에서 사용 가능한 디바이스와 전송 수 조건을 확인하세요.",page:"6-89",section:"6.4.6",keywords:"동일 데이터 블록 전송 채우기"},
 {id:"xch",kind:"command",series:["Q"],code:"XCH(P)",name:"16비트 데이터 교환",desc:"16비트 데이터 교환 명령입니다.",syntax:"XCH  D  /  XCHP  D",example:"피연산자 형식과 동작 조건은 원본 절을 확인하세요.",page:"6-91",section:"6.4.7",keywords:"교환 데이터 swap"},
 {id:"dxch",kind:"command",series:["Q"],code:"DXCH(P)",name:"32비트 데이터 교환",desc:"32비트 데이터 교환 명령입니다.",syntax:"DXCH  D  /  DXCHP  D",example:"피연산자 형식과 동작 조건은 원본 절을 확인하세요.",page:"6-91",section:"6.4.7",keywords:"교환 데이터 32비트"},
 {id:"bxch",kind:"command",series:["Q"],code:"BXCH(P)",name:"블록 16비트 데이터 교환",desc:"블록 단위의 16비트 데이터 교환 명령입니다.",syntax:"BXCH(P)",example:"상세 피연산자와 조건은 원본 절을 확인하세요.",page:"6-93",section:"6.4.8",keywords:"블록 교환 데이터"},
 {id:"swap",kind:"command",series:["Q"],code:"SWAP(P)",name:"상하 바이트 교환",desc:"8비트 단위의 상하 바이트를 교환하는 명령입니다.",syntax:"SWAP  D  /  SWAPP  D",example:"지원 디바이스와 정확한 결과는 원본 절을 확인하세요.",page:"6-95",section:"6.4.9",keywords:"바이트 교환 상하 바이트"},
 {id:"delta",kind:"command",series:["Q"],code:"DELTA(P)",name:"다이렉트 출력의 펄스화",desc:"지정된 다이렉트 액세스 출력(DY)을 펄스 출력합니다. 매뉴얼에는 출력 범위를 초과할 경우의 연산 에러가 설명되어 있습니다.",syntax:"DELTA  DY… / DELTAP",example:"매뉴얼 예제는 X20 조건에서 특수 기능 모듈의 프리셋 지령을 출력하는 프로그램을 다룹니다.",page:"5-37",section:"5.3.10",keywords:"다이렉트 출력 펄스 DY",error:"지정한 다이렉트 액세스 출력 번호가 CPU 출력 범위를 초과하면 에러 코드 4101이 발생할 수 있습니다."},
 {id:"sft",kind:"command",series:["Q"],code:"SFT(P)",name:"비트 디바이스 시프트",desc:"비트 디바이스 시프트 명령입니다. 사용 가능한 디바이스 표를 확인해 적용해야 합니다.",syntax:"SFT(P)",example:"정확한 피연산자와 실행 조건은 원본 절을 확인하세요.",page:"5-39",section:"5.4.1",keywords:"시프트 비트 이동"},
 {id:"rbmov",kind:"command",series:["Q"],code:"RBMOV(P)",name:"LF 파일 레지스터 고속 블록 전송",desc:"매뉴얼의 파일 레지스터 관련 명령 목록에 포함된 고속 블록 전송 명령입니다. 대상 CPU·디바이스 조건을 확인하세요.",syntax:"RBMOV(P)",example:"LF 파일 레지스터 고속 블록 전송",page:"9-32",section:"9.8",keywords:"LF 파일 레지스터 고속 블록 전송"},
 {id:"4101",kind:"error",series:["Q"],code:"4101",name:"연산 에러 — 디바이스 범위 초과 등",desc:"제공된 Q/QnA 명령어 매뉴얼의 BMOV 및 DELTA 관련 설명에서 4101이 언급됩니다. 코드 하나만으로 모든 발생 원인을 단정하지 말고 어떤 명령에서 발생했는지 함께 확인해야 합니다.",syntax:"CPU 진단 정보 및 SD0의 에러 코드 확인",example:"BMOV의 디바이스 범위 초과, DELTA의 출력 번호 범위 초과 사례가 매뉴얼에 기재되어 있습니다.",page:"5-37, 6-88",section:"DELTA / BMOV",keywords:"에러 오류 연산 에러 SM0 SD0 범위 초과",error:"발생 명령, CPU 모델, 진단 정보, 프로그램 스텝을 함께 확인한 후 해당 절의 조치 기준을 적용하세요."}
];
let kind="all",series="all",query="",saved=new Set();
try{saved=new Set(JSON.parse(localStorage.getItem("melsec-pocket-saved")||"[]"))}catch(e){}
const resultBox=document.getElementById("results"),meta=document.getElementById("meta"),input=document.getElementById("query");
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function render(){
 const q=query.trim().toLowerCase();
 const list=data.filter(x=>{
  if(kind==="saved"&&!saved.has(x.id))return false;
  if(kind!=="all"&&kind!=="saved"&&x.kind!==kind)return false;
  if(series==="R")return false; // No R-series manual has been provided yet.
  if(series==="Q"&&!x.series.includes("Q"))return false;
  return !q||[x.code,x.name,x.desc,x.syntax,x.example,x.page,x.section,x.keywords,x.error||""].join(" ").toLowerCase().includes(q);
 });
 meta.textContent=`${list.length}개 항목 · ${kind==="all"?"통합 검색":kind==="command"?"명령어":kind==="error"?"에러·주의":"즐겨찾기"} · ${series==="all"?"전체(현재 Q 자료)":series==="Q"?"Q / QnA":"iQ-R"}`;
 resultBox.innerHTML="";
 if(series==="R"){resultBox.innerHTML='<div class="empty"><b>iQ-R 매뉴얼 데이터가 아직 등록되지 않았어요.</b><br>현재 업로드된 PDF는 MELSEC-Q / QnA용 공통명령편입니다.<br>iQ-R 명령어 매뉴얼을 추가하면 R 항목도 같은 방식으로 검색할 수 있어요.</div>';return}
 if(!list.length){resultBox.innerHTML='<div class="empty">검색 결과가 없습니다.<br>다른 명령어·한국어 키워드·에러 번호를 입력해 보세요.</div>';return}
 for(const x of list){
  const el=document.createElement("article");el.className="card";
  el.innerHTML=`<div class="head"><div><div class="code">${esc(x.code)}</div><span class="pill">Q / QnA</span><span class="pill green">${esc(x.section)}</span><span class="pill">매뉴얼 p.${esc(x.page)}</span></div><button class="save">${saved.has(x.id)?"★ 저장됨":"☆ 저장"}</button></div><div class="title">${esc(x.name)}</div><p>${esc(x.desc)}</p><div class="actions"><button class="expand">상세 설명</button>${x.error?'<button class="jump">에러·주의 보기</button>':""}</div><div class="detail"><b>명령 형식</b><br><code>${esc(x.syntax)}</code><br><br><b>예시 / 참고</b><br>${esc(x.example)}${x.error?'<br><br><b>에러·주의</b><br>'+esc(x.error):""}<br><br><span class="pill warn">원본 매뉴얼 확인 권장</span></div>`;
  el.querySelector(".save").onclick=()=>{saved.has(x.id)?saved.delete(x.id):saved.add(x.id);try{localStorage.setItem("melsec-pocket-saved",JSON.stringify([...saved]))}catch(e){}render()};
  el.querySelector(".expand").onclick=e=>{const d=el.querySelector(".detail");d.classList.toggle("open");e.target.textContent=d.classList.contains("open")?"상세 접기":"상세 설명"};
  const jump=el.querySelector(".jump");if(jump)jump.onclick=()=>{const d=el.querySelector(".detail");d.classList.add("open");d.scrollIntoView({behavior:"smooth",block:"nearest"})};
  resultBox.appendChild(el);
 }
}
document.querySelectorAll("#kind button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#kind button").forEach(v=>v.classList.remove("active"));b.classList.add("active");kind=b.dataset.kind;render()});
document.querySelectorAll("#series button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#series button").forEach(v=>v.classList.remove("active"));b.classList.add("active");series=b.dataset.series;render()});
input.addEventListener("input",()=>{query=input.value;render()});
document.getElementById("clear").onclick=()=>{input.value="";query="";render();input.focus()};
render();
