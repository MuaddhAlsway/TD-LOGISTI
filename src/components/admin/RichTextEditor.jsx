import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';

export default function RichTextEditor({ value, onChange, placeholder = 'Start writing...' }) {
  const editorRef = useRef(null);
  const [showPreview, setShowPreview] = useState(false);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertHeading = (level) => {
    execCommand('formatBlock', `h${level}`);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const insertBlockquote = () => {
    execCommand('formatBlock', 'blockquote');
  };

  const insertBox = (type) => {
    const boxClass = type === 'tip' ? 'tip-box' : type === 'highlight' ? 'highlight-box' : 'warning-box';
    const icon = type === 'tip' ? '💡 Pro Tip:' : type === 'highlight' ? '📊 Insight:' : '⚠️ Warning:';
    const html = `<div class="${boxClass}"><strong>${icon}</strong> Your content here...</div><p></p>`;
    execCommand('insertHTML', html);
  };

  const insertCode = () => {
    const code = prompt('Enter code:');
    if (code) {
      execCommand('insertHTML', `<code>${code}</code>`);
    }
  };

  const insertList = (type) => {
    execCommand(type === 'ordered' ? 'insertOrderedList' : 'insertUnorderedList');
  };

  const toolbarButtons = [
    { icon: 'fa-solid:bold', command: () => execCommand('bold'), title: 'Bold' },
    { icon: 'fa-solid:italic', command: () => execCommand('italic'), title: 'Italic' },
    { icon: 'fa-solid:underline', command: () => execCommand('underline'), title: 'Underline' },
    { type: 'divider' },
    { icon: 'fa-solid:heading', command: () => insertHeading(2), title: 'Heading 2' },
    { icon: 'fa-solid:h', command: () => insertHeading(3), title: 'Heading 3', small: true },
    { type: 'divider' },
    { icon: 'fa-solid:list-ul', command: () => insertList('unordered'), title: 'Bullet List' },
    { icon: 'fa-solid:list-ol', command: () => insertList('ordered'), title: 'Numbered List' },
    { type: 'divider' },
    { icon: 'fa-solid:quote-left', command: insertBlockquote, title: 'Blockquote' },
    { icon: 'fa-solid:link', command: insertLink, title: 'Insert Link' },
    { icon: 'fa-solid:code', command: insertCode, title: 'Insert Code' },
    { type: 'divider' },
    { icon: 'fa-solid:lightbulb', command: () => insertBox('tip'), title: 'Tip Box', color: 'var(--success-default)' },
    { icon: 'fa-solid:info-circle', command: () => insertBox('highlight'), title: 'Highlight Box', color: 'var(--info-default)' },
    { icon: 'fa-solid:exclamation-triangle', command: () => insertBox('warning'), title: 'Warning Box', color: 'var(--warning-default)' },
  ];

  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: 'var(--border-default)' }}>
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-3 border-b flex-wrap" style={{ backgroundColor: 'var(--bg-container-secondary)', borderColor: 'var(--border-default)' }}>
        {toolbarButtons.map((btn, idx) => (
          btn.type === 'divider' ? (
            <div key={idx} className="w-px h-6 mx-2" style={{ backgroundColor: 'var(--border-default)' }} />
          ) : (
            <button
              key={idx}
              type="button"
              onClick={btn.command}
              title={btn.title}
              className="flex items-center justify-center w-8 h-8 rounded hover:bg-gray transition-colors"
              style={{ color: btn.color || 'var(--text-secondary)' }}
            >
              <Icon icon={btn.icon} className={btn.small ? 'text-xs' : 'text-sm'} />
            </button>
          )
        ))}
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center gap-2 px-3 py-1 rounded text-sm font-medium transition-colors"
          style={{ 
            backgroundColor: showPreview ? 'var(--primary-red)' : 'transparent',
            color: showPreview ? 'white' : 'var(--text-secondary)'
          }}
        >
          <Icon icon={showPreview ? 'fa-solid:edit' : 'fa-solid:eye'} className="text-xs" />
          {showPreview ? 'Edit' : 'Preview'}
        </button>
      </div>

      {/* Editor / Preview */}
      {showPreview ? (
        <div 
          className="article-content p-6 min-h-64 bg-white"
          dangerouslySetInnerHTML={{ __html: value || '<p class="text-secondary">No content yet...</p>' }}
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          className="p-6 min-h-64 bg-white focus:outline-none article-content"
          onInput={handleInput}
          dangerouslySetInnerHTML={{ __html: value }}
          data-placeholder={placeholder}
          style={{ minHeight: '300px' }}
        />
      )}
    </div>
  );
}
