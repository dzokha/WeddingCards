
interface Props {
  name: string
  role: string
  image: string
}

export default function BrideGroom({ name, role, image }: Props) {
  return (
    <div className="bride-groom-card">
      <img src={image} alt={name} className="bride-groom-img" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
    </div>
  )
}
