import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-5">
            <div className="row">
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                    products
                    </div>
                </div>
                {/* end single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                    name of product
                    </div>
                </div>
                {/* end single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                    price
                    </div>
                </div>
                {/* end single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                    quantity
                    </div>
                </div>
                {/* end single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                    remove
                    </div>
                </div>
                {/* end single column */}
                {/* single column */}
                <div className="col-lg-2">
                    <div className="text-uppercase">
                    total
                    </div>
                </div>
                {/* end single column */}
            </div>
        </div>
    )
}