import Activity from '@/components/Activity'
import Footer from '@/containers/Footer'
import Info from '@/containers/Info'
import Main from '@/containers/Main'
import Projects from '@/containers/Projects'

export default function Home() {
  return (
    <main>
      <Main />
      <Info />
      <Projects />
      <Activity />
      <Footer />
    </main>
  )
}
