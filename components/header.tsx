import Link from 'next/link'
import ThemeChanger from './themechanger'
import { useRouter } from 'next/router'
import Image from 'next/image'
import avatar from 'public/letter-r.png'
import styles from './header.module.scss'
import {Button} from "@chakra-ui/react";
import {useTheme} from "next-themes";

const links = [

  { name: 'English', path: '/default/en' ,target:""},
  { name: '简体中文', path: '/default/zh' ,target:""},
]

const Header = (): JSX.Element => {
  const { setTheme, theme } = useTheme()
  function gen(){
    setTheme("light")

    //@ts-ignore
    html2canvas(document.querySelector("#main-area"), {
      allowTaint: true,
      //foreignObjectRendering:true,
      useCORS: true,
      backgroundColor:null
    }).then((canvas:any) => {
      console.log(canvas);
      let dataURL = canvas.toDataURL('image/jpeg');
      let a = document.createElement("A");
      //@ts-ignore
      a.href = dataURL;
      //@ts-ignore
      a.download = `resume-${new Date().toISOString()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
     /**
    let opt = {
      margin:       1,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    //@ts-ignore
    html2pdf().set(opt).from(document.querySelector("#main-area")).save();
     */
  }
  const router = useRouter()
  const pathname = router.pathname.split('/[')[0] // active paths on dynamic subpages
  return (
    <>
      <header id="header-wrapper" className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, path, target:string }) => {
                let target;
                if (target === '_blank') {
                  return (
                    <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                      <a href={path} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                    <Link href={path}>
                      {name}
                    </Link>
                  </li>
                )
              })}
            </ol>
          </nav>
          <ThemeChanger />
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  )
}

export default Header
