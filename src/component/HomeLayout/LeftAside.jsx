import React, { Suspense } from 'react';
import CategorisLeft from '../CategorisLeft';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
           <CategorisLeft></CategorisLeft>
           </Suspense>
        </div>
    );
};

export default LeftAside;