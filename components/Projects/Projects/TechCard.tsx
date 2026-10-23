type TechCardProps={ 
  tech: string;
}

export default function TechCard({tech}: TechCardProps){
return (
  <div>
    {tech}
  </div>
)
}