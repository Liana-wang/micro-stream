import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            对不起，您访问的页面不存在。
        </div>
    );
}

export default NotFound