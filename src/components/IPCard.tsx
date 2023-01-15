import Props from "@/types/props/Props";
import Brand from "./base/Brand";
import Card from "./base/Card";
import FAQ from "./base/FAQ";
import IPDataTable from "./ip/IPDataTable";
import IPInformation from "./ip/IPInformation";


const IPCard: React.FC<Props> = (props) => {
  return (
    <Card className={props.className}>
      <Brand row={true}></Brand>
      <IPInformation />
      <IPDataTable className="mt-3"/>
      <FAQ className="mt-3"/>
    </Card>
  )
}

export default IPCard;