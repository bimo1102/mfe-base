import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;

const ContentLoader = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <Spin indicator={antIcon} />
        </div>
    );
};

export { ContentLoader };
