
import React from 'react';
import { HTMLFlipBook } from './HTMLFlipBook';

export default function MyBook() {
    return (
        <div className="flex justify-center mt-10">
            <HTMLFlipBook width={300} height={500} className="bg-gray-100 p-4 rounded-lg">
                <div>
                    <h2 className="text-xl font-bold text-center">Page 1</h2>
                    <p className="text-gray-600">Content for the first page.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-center">Page 2</h2>
                    <p className="text-gray-600">Another content block.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-center">Page 3</h2>
                </div>
            </HTMLFlipBook>
        </div>
    );
}
