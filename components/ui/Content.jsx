import React,{ useState} from 'react'
import { ContentIn} from "../"
import { RichText } from "@graphcms/rich-text-react-renderer";



const Content = ({data, delay}) => {

    const [opacity, setOpacity] = useState(false)
  return (
    <div className="content-opacity">
      <ContentIn delay={delay} toggle={setOpacity}>
        <RichText content={data} />
      </ContentIn>
      <style jsx>{`
        .content-opacity {
          opacity: ${opacity ? 1 : 0};
        }
      `}</style>
    </div>
  );
}

export default Content