import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Возвращает список заявок для админ-панели. Требует пароль."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    password = body.get('password', '')

    if password != os.environ.get('ADMIN_PASSWORD', ''):
        return {
            'statusCode': 401,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Неверный пароль'})
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    schema = os.environ.get('MAIN_DB_SCHEMA', 't_p34712235_washing_machine_repa')
    cur.execute(
        f"SELECT id, name, phone, message, created_at FROM {schema}.requests ORDER BY created_at DESC"
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    requests = [
        {
            'id': r[0],
            'name': r[1],
            'phone': r[2],
            'message': r[3] or '',
            'created_at': r[4].strftime('%d.%m.%Y %H:%M') if r[4] else ''
        }
        for r in rows
    ]

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'requests': requests}, ensure_ascii=False)
    }
