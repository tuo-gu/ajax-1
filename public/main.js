
let n=1
getPage.onclick=()=>{
  if(n>=3){
    alert('当前已是最后一项')
  }else{
    console.log(n)
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+=1}`)
    request.onreadystatechange=()=>{
      if(request.readyState===4&&request.status===200){
        const array=JSON.parse(request.response)
        array.forEach(item => {
          const li=document.createElement('li')
          li.textContent=item.id
          xxx.appendChild(li)
        });
        
      }
    }
    request.send()
  }
}

getJSON.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('GET','/5.json')
  request.onreadystatechange=()=>{
    if(request.readyState===4&&request.status===200){
      console.log(request.response)
      const object=JSON.parse(request.response)//把符合JSON的字符串变成对象
      myName.textContent=object.name
    }
  }
  request.send()
}
getXML.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('GET','/4.xml')
  request.onreadystatechange=()=>{
    if(request.readyState===4&&request.status===200){
      const dom=request.responseXML
      const text=dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}

getCSS.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onload=()=>{
    const style=document.createElement('style')
    style.innerHTML=request.response
    document.head.appendChild(style)
  }
  request.onerror=()=>{
    console.log('失败了')
  }
  request.send()
}

getJS.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('get','/2.js')
  request.onload=()=>{
    const script=document.createElement('script')
    script.innerHTML=request.response
    document.body.appendChild(script)
  }
  request.onerror=()=>{
    console.log('失败')
  }
  request.send()
}
getHTML.onclick=()=>{
  const request=new XMLHttpRequest()
  request.open('GET','3.html')
  request.onreadystatechange=()=>{
    if(request.readyState===4){
      console.log('下载完成')
      if(request.status>=200&&request.status<300){
        const html=document.createElement('div')
        html.innerHTML=request.response
        document.body.appendChild(html)
      }else{
        alert('加载CSS失败')
      }
    }
  }
  request.send()
}