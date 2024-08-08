import VulnerabilityLevel from '../../components/select/vulnerabilityLevel'
import VulnerabilityTitle from '../../components/select/vulnerabilityTitle'

export default function MultiFilterMenuBar() {
  return (
    <div>
      <VulnerabilityLevel />
      <VulnerabilityTitle />
    </div>
  )
}
