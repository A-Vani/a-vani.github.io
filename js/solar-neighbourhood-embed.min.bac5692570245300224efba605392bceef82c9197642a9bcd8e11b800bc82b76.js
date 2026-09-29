(()=>{document.querySelectorAll(".solar-neighbourhood-embed").forEach(e=>{if(e.dataset.resizeBound)return;e.dataset.resizeBound="true";const t=()=>{const t=e.contentDocument;if(!t?.querySelector("main")||t.getElementById("embedded-explorer-layout"))return;const n=t.createElement("style");n.id="embedded-explorer-layout",n.textContent=`
        html, body { height: auto; min-height: 0; }
        main { height: auto; min-height: 0; }
        #plot { height: 460px; min-height: 0; }
        aside { max-height: none; overflow: visible; }
      `,t.head.appendChild(n);const s=()=>{const n=Math.ceil(t.body.getBoundingClientRect().height);n>0&&Math.abs(e.clientHeight-n)>1&&(e.style.height=`${n}px`)};new ResizeObserver(s).observe(t.body),s();const o=t.getElementById("plot");e.contentWindow.Plotly&&o?._fullLayout&&e.contentWindow.Plotly.Plots.resize(o)};e.addEventListener("load",t),t()})})()