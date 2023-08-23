import FormFields from "./FormFields";
import NewForm from "./NewForm";
import {Row, Col} from 'antd';

const DynamicFormBuilder = () => {
    return ( 
        <Row gutter={[16, 16]}  style={{margin: '1rem'}}>
            <Col span={4}>
                <FormFields />
            </Col>
            <Col span={18}>
                    <NewForm /> 
            </Col>
      </Row>
     );
}
 
export default DynamicFormBuilder;