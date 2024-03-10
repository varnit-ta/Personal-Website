const TechStack = ({icon, name, key}: {icon: string, name: string, key: any}) => {
  return (
    <div className="skillIconDown">
      <div className="skillIconUp">
        <img src={icon} key={key} alt={name}/>
      </div>
    </div>
  );
}

export default TechStack;
