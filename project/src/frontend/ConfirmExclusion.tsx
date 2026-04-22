import React from 'react';

interface ConfirmExclusionProps {
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    message?: string;
}

const ConfirmExclusion: React.FC<ConfirmExclusionProps> = ({
    isOpen,
    onCancel,
    onConfirm,
    message = 'Are you sure you want to delete this item?',
}) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
                width: '100%',
            }}>
                <p>{message}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <button onClick={onCancel} style={{ padding: '10px 20px', backgroundColor: '#ccc', border: 'none', borderRadius: '4px' }}>
                        Cancel
                    </button>
                    <button onClick={onConfirm} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmExclusion;